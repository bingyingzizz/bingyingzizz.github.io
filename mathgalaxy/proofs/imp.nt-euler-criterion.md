# Euler 判别法：$a^{(p-1)/2}$ 只能等于 $\pm 1$
`imp.nt-euler-criterion` · 推出 · strong 边 · 根 `../`

`def.order-mod-n` 模 n 的阶 → `thm.euler-criterion` Euler 判别法

设 $p$ 奇素数、$p \nmid a$，$n = \frac{p-1}{2}$。



由 Fermat 小定理（`thm.fermat-little`），$\left(a^{n}\right)^{2} = a^{p-1} \equiv 1 \pmod p$。于是 $a^{n}$ 是 $x^{2} \equiv 1$ 的根，而 $\mathbb{Z}/p\mathbb{Z}$ 是域，$x^{2} - 1 = (x-1)(x+1)$ 只有两根，故 $a^{n} \equiv \pm 1$。



**若 $a$ 是剩余**：$a \equiv b^{2}$，则 $a^{n} \equiv b^{2n} = b^{p-1} \equiv 1$。



**若 $a$ 不是剩余**：$x^{n} \equiv 1$ 在 $\mathbb{F}_{p}^{\times}$ 里恰有 $n = \frac{p-1}{2}$ 个解（$\mathbb{F}_{p}^{\times}$ 循环，或直接由「$x^{n} - 1$ 至多 $n$ 个根」加计数），而这 $n$ 个解全是剩余（前一段已证剩余都满足）。剩余的个数也恰是 $n$，故「$a^{n} \equiv 1$」$\iff$「$a$ 是剩余」。剩下的是非剩余只能取 $-1$。



结合二者即得 $\left(\frac{a}{p}\right) \equiv a^{(p-1)/2}$。
