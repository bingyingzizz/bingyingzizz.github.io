# 绝对值的定义 $\implies$ 运算性质
`imp.abs-properties` · 推出 · strong 边 · 根 `../`

`def.abs` 绝对值 |x| → `prop.abs-properties` 绝对值的运算性质

以下都按 $x \ge 0$ 与 $x < 0$ 分情形，用 $|x| = \max\{x, -x\}$。

**(i)** 两种情形下 $|x|$ 分别是 $x$ 或 $-x$，都 $\ge 0$；$|x| = 0$ 迫使 $x = 0$。$|-x|$：若 $x \ge 0$ 则 $-x \le 0$，$|-x| = -(-x) = x = |x|$；另一情形对称。$-|x| \le x \le |x|$ 由 $x \le \max\{x,-x\}$ 与 $-x \le \max\{x,-x\}$ 直接读出。

**(ii)** 四种符号组合分别验证：$x, y \ge 0$ 时 $xy \ge 0$，$|xy| = xy = |x||y|$；$x \ge 0 > y$ 时 $xy \le 0$，$|xy| = -xy = x \cdot (-y) = |x||y|$；其余两种对称。商由 $|x| = |y| \cdot |x/y|$ 与 $|y| > 0$ 两边除以 $|y|$ 得到。

**(iii)** 两种情形都有 $|x|^{2} = x^{2}$（$(-x)^{2} = x^{2}$）。

> 续见 proofs/imp.abs-properties.2.md
