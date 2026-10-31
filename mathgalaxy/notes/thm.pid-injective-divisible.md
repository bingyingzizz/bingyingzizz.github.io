# 内射等价于可除　`thm.pid-injective-divisible`　·　说明
根 `../`

**可除 $\implies$ 内射**（用 Baer 判据）：设 $J \subseteq R$ 是理想，$f : J \to I$。主理想整环里 $J = (a)$。若 $a = 0$ 则 $J = 0$，取 $x = 0$；若 $a \ne 0$，记 $y := f(a)$，由可除性取 $x \in I$ 使 $a x = y$。于是对 $r a \in J$ 有 $f(r a) = r f(a) = r a x = (r a) x$ ✓，即 $f$ 由「乘 $x$」给出。

**内射 $\implies$ 可除**：设 $a \ne 0$、$y \in I$。把 Baer 判据用在理想 $(a)$ 与映射 $a \mapsto y$ 上，得 $x$ 使 $a x = y$ ✓。

$\mathbb{Z}$ 的情形就是 $R = \mathbb{Z}$（主理想整环），此时 $R$-模即阿贝尔群（`prop.zmod-is-ab`）✓。

⭐ 一句话记住：**「除以 $a$」就是「沿 $(a) \rightarrowtail R$ 延拓」**。主理想整环上理想结构最简单，Baer 判据就退化成一道除法题。
