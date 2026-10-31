# Gauss 引理（二次剩余）　`lem.gauss-qr`　·　说明
根 `../`

**作用**：它把 Legendre 符号降成「数一数有多少个超过了 $p/2$」，从而不必做幂运算就能算出 $\left(\frac{2}{p}\right)$、$\left(\frac{-1}{p}\right)$ 这类具体值。



**证明要点**：记这些最小正剩余为 $r_{1}, \cdots, r_{n}$（$n = \frac{p-1}{2}$）。把它们里大于 $p/2$ 的换成 $p - r_{i}$，得到的 $n$ 个数恰好是 $1, \cdots, n$ 的一个排列。于是



$$a^{n} \cdot n! \equiv \pm n! \pmod p ,$$



符号由「换了多少个」（即 $\mu$ 的奇偶）决定。约掉 $n!$（$p \nmid n!$）再用 Euler 判别法 $a^{n} \equiv \left(\frac{a}{p}\right)$ 即得。



⚠ 与微分几何里那条 `lem.gauss-lemma`（Gauss 引理 / 测地极坐标）**同名不同物**，别混。
