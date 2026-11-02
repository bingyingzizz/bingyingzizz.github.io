# 带余除法 $\implies$ 因式定理
`imp.factor-theorem` · 推出 · strong 边 · 根 `../`

`thm.division-algorithm` 带余除法 → `thm.factor-theorem` 因式定理与根

设 $a \in K$。把 $f$ 除以 $x - a$（首一，故带余除法适用）：

$$f = q\,(x - a) + r, \qquad \deg r < 1$$

即 $r \in K$ 是常数。把 $x = a$ 代入两边：$f(a) = q(a) \cdot 0 + r = r$。

于是 $f(a) = 0 \iff r = 0 \iff (x - a) \mid f$。∎

> 这条证明只有一行实质内容，但它给出了一个额外收获：**余式就是函数值** —— 这也是多项式作为「函数」与作为「形式对象」之间的桥。
