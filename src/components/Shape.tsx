interface ShapesProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "company";
}

const sizeClasses: Record<NonNullable<ShapesProps["size"]>, string> = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
};

/**
 * Brendning pixel-logotip belgisi (Hero tugmasi, Newsletter karta burchagi,
 * Footer, Process bo'limi va h.k.da qo'llaniladi).
 *
 * Geometriya aynan yuklangan Shapes.svg fayldagi koordinatalar bilan bir xil
 * (viewBox 0 0 37 34) — shuning uchun oddiy 2x2 katakcha emas, balki asl
 * nusxadagi teng bo'lmagan proporsiyalar saqlanadi. Ranglar esa hardcoded
 * hex emas, balki index.css'dagi `@theme` o'zgaruvchilaridan olinadi —
 * shunday qilib rang bitta joyda (index.css) boshqariladi.
 *
 * `variant="company"` uchun alohida rasm-manba berilmagani sabab, men buni
 * gorizontal aks (mirror) sifatida talqin qildim — agar Company/BlogInner
 * uchun boshqacha ko'rinish kerak bo'lsa, aytib bering, moslashtiraman.
 */
export function Shapes({
    className = "",
    size = "md",
    variant = "default",
}: ShapesProps) {
    return (
        <svg
            viewBox="0 0 37 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${sizeClasses[size]} ${className}`}
            style={
                variant === "company" ? { transform: "scaleX(-1)" } : undefined
            }
            aria-hidden="true"
        >
            <path
                d="M0 13.8518V0H36.72V13.8518H0Z"
                fill="var(--color-primary)"
            />
            <path
                d="M0 33.9999V23.9258H10.1297V33.9999H0Z"
                fill="var(--color-primary)"
            />
            <path
                d="M0 23.9259V0H24.0579V23.9259H0Z"
                fill="var(--color-orange)"
            />
            <path
                d="M10.1289 13.8518V0H24.0572V13.8518H10.1289Z"
                fill="var(--color-peach)"
            />
        </svg>
    );
}
