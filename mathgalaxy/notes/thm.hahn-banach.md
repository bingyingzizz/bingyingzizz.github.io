# Hahn–Banach 定理　`thm.hahn-banach`　·　说明
根 `../`

**第一步：一维延拓引理。** 设 $x_0 \notin M$，$N = M \oplus \mathbb{R}x_0$。要在 $N$ 上定义 $g(m + t x_0) = f(m) + t c$ 并保持 $g \le p$，等价于对一切 $m \in M$ 有

$f(m) + c \le p(m + x_0), \qquad f(m) - c \le p(m - x_0).$

即 $c$ 落在区间 $[\sup_m (f(m) - p(m - x_0)),\ \inf_m (p(m + x_0) - f(m))]$ 里。此区间非空，因为对任意 $m_1, m_2 \in M$，由次线性性

$f(m_1) + f(m_2) = f(m_1 + m_2) \le p(m_1 + m_2) \le p(m_1 - x_0) + p(m_2 + x_0),$

即 $f(m_1) - p(m_1 - x_0) \le p(m_2 + x_0) - f(m_2)$。任取 $c$ 落在其间，延拓即成立。

> 续见 notes/thm.hahn-banach.2.md
