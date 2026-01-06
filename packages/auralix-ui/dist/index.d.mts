import * as react from 'react';
import { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
    size?: "sm" | "md" | "lg";
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "error" | "info";
    size?: "sm" | "md";
    className?: string;
}
declare function Badge({ children, variant, size, className, }: BadgeProps): react_jsx_runtime.JSX.Element;

interface AlertProps {
    children: React.ReactNode;
    variant?: "success" | "error" | "warning" | "info";
    title?: string;
    icon?: boolean;
    className?: string;
}
declare function Alert({ children, variant, title, icon, className, }: AlertProps): react_jsx_runtime.JSX.Element;

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}
declare function Card({ children, className, hoverable }: CardProps): react_jsx_runtime.JSX.Element;
interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardHeader({ children, className }: CardHeaderProps): react_jsx_runtime.JSX.Element;
interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardTitle({ children, className }: CardTitleProps): react_jsx_runtime.JSX.Element;
interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardDescription({ children, className }: CardDescriptionProps): react_jsx_runtime.JSX.Element;
interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardContent({ children, className }: CardContentProps): react_jsx_runtime.JSX.Element;
interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardFooter({ children, className }: CardFooterProps): react_jsx_runtime.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    inputSize?: "sm" | "md" | "lg";
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    closeOnBackdrop?: boolean;
    className?: string;
}
declare function Modal({ isOpen, onClose, children, size, closeOnBackdrop, className, }: ModalProps): react_jsx_runtime.JSX.Element | null;
interface ModalHeaderProps {
    children: React.ReactNode;
    className?: string;
}
declare function ModalHeader({ children, className }: ModalHeaderProps): react_jsx_runtime.JSX.Element;
interface ModalTitleProps {
    children: React.ReactNode;
    className?: string;
}
declare function ModalTitle({ children, className }: ModalTitleProps): react_jsx_runtime.JSX.Element;
interface ModalBodyProps {
    children: React.ReactNode;
    className?: string;
}
declare function ModalBody({ children, className }: ModalBodyProps): react_jsx_runtime.JSX.Element;
interface ModalFooterProps {
    children: React.ReactNode;
    className?: string;
}
declare function ModalFooter({ children, className }: ModalFooterProps): react_jsx_runtime.JSX.Element;

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    options: SelectOption[];
    placeholder?: string;
    error?: boolean;
    selectSize?: "sm" | "md" | "lg";
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface TooltipProps {
    children: ReactNode;
    content: string;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare function Tooltip({ children, content, position, className, }: TooltipProps): react_jsx_runtime.JSX.Element;

interface TableProps {
    children: React.ReactNode;
    className?: string;
    striped?: boolean;
    hoverable?: boolean;
}
declare function Table({ children, className, striped, hoverable }: TableProps): react_jsx_runtime.JSX.Element;
interface TableHeaderProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableHeader({ children, className }: TableHeaderProps): react_jsx_runtime.JSX.Element;
interface TableBodyProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableBody({ children, className }: TableBodyProps): react_jsx_runtime.JSX.Element;
interface TableRowProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableRow({ children, className }: TableRowProps): react_jsx_runtime.JSX.Element;
interface TableHeadProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableHead({ children, className }: TableHeadProps): react_jsx_runtime.JSX.Element;
interface TableCellProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableCell({ children, className }: TableCellProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { Alert, type AlertProps, Badge, type BadgeProps, Button, type ButtonProps, Card, CardContent, type CardContentProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, CardTitle, type CardTitleProps, Input, type InputProps, Modal, ModalBody, type ModalBodyProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, ModalTitle, type ModalTitleProps, Select, type SelectOption, type SelectProps, Table, TableBody, type TableBodyProps, TableCell, type TableCellProps, TableHead, type TableHeadProps, TableHeader, type TableHeaderProps, type TableProps, TableRow, type TableRowProps, Textarea, type TextareaProps, Tooltip, type TooltipProps, cn };
