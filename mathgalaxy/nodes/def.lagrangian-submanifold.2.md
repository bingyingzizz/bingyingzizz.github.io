# Lagrange 子流形　`def.lagrangian-submanifold`　·　续页（第 2 页）
[在星图里打开](../#n=def.lagrangian-submanifold)　·　第 1 页 [nodes/def.lagrangian-submanifold.md](./def.lagrangian-submanifold.md)

## 陈述（续）
设 $(M^{2n}, \omega)$ 是辛流形。浸入子流形 $L \subseteq M$ 叫 **Lagrange 子流形**（Lagrangian submanifold），若
1. $\dim L = n$（即 $\dim M$ 的一半）；
2. $\omega|_{L} = 0$（$L$ 上 $\omega$ 恒为零，即 $L$ 迷向）。

等价说法：对每个 $p \in L$，$T_{p}L$ 是 $T_{p}M$ 的 Lagrange 子空间。

**标准例子**：
- $\mathbb{R}^{2n}$ 的零截面 $\{p = 0\}$（这里是「位置空间」，动量全零）；
- 更一般地，**任意函数的图像** $\{(q, p) : p = dF(q)\}$ 是 Lagrange 子流形 —— 因为 $\omega|_{L} = dq \wedge d(dF) = 0$。

> 续见 [nodes/def.lagrangian-submanifold.3.md](./def.lagrangian-submanifold.3.md)
