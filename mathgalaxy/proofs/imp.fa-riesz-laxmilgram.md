# Riesz 表示 $\implies$ Lax–Milgram（第一步）
`imp.fa-riesz-laxmilgram` · 推出 · strong 边 · 根 `../`

`thm.riesz-hilbert` Riesz 表示（Hilbert） → `thm.lax-milgram` Lax–Milgram 定理

固定 $y$，$\varphi_y(x) = L(x, y)$ 是连续线性泛函。由 Riesz 表示定理，存在唯一 $A y$ 使 $L(x, y) = \langle x, A y\rangle$，且 $\|A y\| = \|\varphi_y\| \le M \|y\|$。
这就给出算子 $A$ 并证明 $\|A\| \le M$；$A$ 的线性来自 $L$ 对第二变量的线性。

> Lax–Milgram 的「存在唯一 $A$」完全由 Riesz 表示承担；强制性只用于后面的可逆性。
