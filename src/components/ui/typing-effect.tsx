"use client";

import { useState, useEffect, useMemo, useRef } from 'react';
import React from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string | React.ReactNode;
  speed?: number;
  onFinished?: () => void;
  className?: string;
}

export function TypingEffect({ text, speed = 30, onFinished, className }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState<string | React.ReactNode>('');
  const [isMounted, setIsMounted] = useState(false);
  const onFinishedRef = useRef(onFinished);
  onFinishedRef.current = onFinished;

  const textToType = useMemo(() => {
    if (typeof text === 'string') {
      return text;
    }
    const extractText = (node: React.ReactNode): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (React.isValidElement(node) && node.props.children) {
            return React.Children.toArray(node.props.children).map(extractText).join('');
        }
        return '';
    };
    return extractText(text);
  }, [text]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }
  
    if (typeof text !== 'string') {
      setDisplayedText(text);
      if (onFinishedRef.current) {
        onFinishedRef.current();
      }
      return;
    }

    if (displayedText === '') {
      // Start the typing effect from an empty string on the client
      const timeoutId = setTimeout(() => {
        setDisplayedText(textToType.slice(0, 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    }
    
    if (typeof displayedText === 'string' && displayedText.length < textToType.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(textToType.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (typeof displayedText === 'string' && displayedText.length === textToType.length) {
      if (onFinishedRef.current) {
        onFinishedRef.current();
      }
    }
  }, [displayedText, textToType, speed, text, isMounted]);

  if (!isMounted) {
    return null;
  }
  
  if (typeof text !== 'string') {
    return <>{text}</>
  }

  return <pre className={cn("whitespace-pre-wrap", className)}>{displayedText}</pre>;
}
TypingEffect.displayName = "TypingEffect";
