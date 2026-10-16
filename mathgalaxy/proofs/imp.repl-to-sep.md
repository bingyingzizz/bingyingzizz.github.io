# 替换公理模式 $\implies$ 分离公理模式
`imp.repl-to-sep` · 推出 · strong 边 · 根 `../`

`ax.repl` 替换公理模式 → `ax.sep` 分离公理模式

设 $\varphi (x, p)$ 是不含 $B$ 的公式，$A$ 是任意集合。取公式

$$\psi(x, y, p) :\equiv  ( x = y \wedge  \varphi(x, p) )$$

对任意 $x$，至多只有一个 $y$ 使 $\psi (x, y, p)$ 成立（因为 $x = y$ 已经确定了 $y$）。于是替换公理模式给出一个集合

$$B = \{ y : \exists x \in A, \psi(x, y, p) \} = \{ x \in A : \varphi(x, p) \}$$

这正是分离公理模式所要的 $B$（外延公理保证唯一）。∎

> 所以 ZF 里其实只需要「替换 + 一个集合存在」就够了，教材仍保留分离公理是为了方便陈述与使用。
