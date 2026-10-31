# Gauss 引理：数超过 $p/2$ 的个数，用 Euler 判别法收尾
`imp.nt-gauss-qr` · 推出 · strong 边 · 根 `../`

`thm.euler-criterion` Euler 判别法 → `lem.gauss-qr` Gauss 引理（二次剩余）

设 $n = \frac{p-1}{2}$，把 $a, 2a, \cdots, na$ 取模 $p$ 的最小正剩余记为 $r_{1}, \cdots, r_{n}$，其中 $\mu$ 个 $> \frac{p}{2}$。

对每个 $r_{i}$ 定义 $s_{i} := r_{i}$（若 $r_{i} < \frac{p}{2}$）或 $p - r_{i}$（若 $r_{i} > \frac{p}{2}$）。则 $s_{1}, \cdots, s_{n}$ 是 $1, \cdots, n$ 的一个排列：因为 $s_{i} \le \frac{p-1}{2}$ 且互不相同（若 $s_{i} = s_{j}$，则 $r_{i} = \pm r_{j}$，即 $ia \equiv \pm ja$，约掉 $a$ 后 $i \equiv \pm j$，而 $1 \le i, j \le n$ 迫使 $i = j$）。

两边相乘：

$$n!\, a^{n} = \prod_{i=1}^{n}(ia) \equiv \prod_{i=1}^{n} r_{i} \equiv (-1)^{\mu}\prod_{i=1}^{n} s_{i} = (-1)^{\mu}\, n! \pmod p .$$

> 续见 proofs/imp.nt-gauss-qr.2.md
