# 绝对值的定义 $\implies$ 三角不等式
`imp.triangle` · 推出 · strong 边 · 根 `../`

`def.abs` 绝对值 |x| → `thm.triangle` 三角不等式

设 $x, y \in K$。先看两个基本事实（都由 $|t| = \max\{t, -t\}$ 直接读出）：

- $t \le |t|$ 且 $-t \le |t|$，即 $-|t| \le t \le |t|$。

于是

$$x \le |x|, \qquad -x \le |x|, \qquad y \le |y|, \qquad -y \le |y|$$

两两相加（序与加法相容）：

$$x + y \le |x| + |y|, \qquad -(x + y) \le |x| + |y|$$

即 $-c \le x + y \le c$，其中 $c := |x| + |y| \ge 0$。而

$$-c \le t \le c \iff |t| \le c \qquad (c \ge 0)$$

（$\Longleftarrow$：由 $t \le c$ 与 $-t \le c$ 分别取 $\max$；$\implies$：$|t|$ 等于 $t$ 或 $-t$，两种情形都在 $c$ 以下。）取 $t = x + y$ 得

$$|x + y| \le |x| + |y| \qquad \blacksquare$$

> 续见 proofs/imp.triangle.2.md
