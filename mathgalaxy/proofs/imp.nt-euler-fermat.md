# Fermat 小定理：取 $n = p$ 的 Euler 定理
`imp.nt-euler-fermat` · 推出 · strong 边 · 根 `../`

`thm.euler-theorem` Euler 定理 → `thm.fermat-little` Fermat 小定理

$p$ 是素数时 $\varphi(p) = p - 1$（$1, \cdots, p$ 中只有 $p$ 与 $p$ 不互素），且 $p \nmid a$ 正是 $\gcd(a, p) = 1$。



把 $n = p$ 代入 Euler 定理即得 $a^{p-1} \equiv 1 \pmod p$。



两边乘 $a$ 得 $a^{p} \equiv a \pmod p$ —— 这一步对 $p \mid a$ 也成立（两边都是 $0$），所以「一切整数 $a$」的版本成立。
