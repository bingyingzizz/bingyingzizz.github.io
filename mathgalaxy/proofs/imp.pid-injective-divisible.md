# Baer 判据 + 主理想 $\implies$ 内射即除
`imp.pid-injective-divisible` · 推出 · strong 边 · 根 `../`

`thm.baer-criterion` 内射的理想判据 + `def.divisible-group` 可除群 → `thm.pid-injective-divisible` 内射等价于可除

**（可除 $\implies$ 内射）** 用 Baer 判据。设 $J \subseteq R$ 是理想，$f : J \to I$。主理想整环里 $J = (a)$。
- $a = 0$：$J = 0$，取 $x = 0$ 即可；
- $a \ne 0$：记 $y := f(a)$，由可除性取 $x \in I$ 使 $a x = y$。于是对 $r a \in J$：$f(r a) = r f(a) = r a x = (r a) x$ ✓，即 $f$ 就是「乘 $x$」。
故延拓总存在，$I$ 内射 ✓。

**（内射 $\implies$ 可除）** 设 $a \ne 0$、$y \in I$。把 Baer 判据用在理想 $(a)$ 与映射 $a \mapsto y$ 上，得 $x \in I$ 使 $a x = y$ ✓。

> 续见 proofs/imp.pid-injective-divisible.2.md
