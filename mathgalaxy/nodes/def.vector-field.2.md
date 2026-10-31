# 向量场　`def.vector-field`　·　续页（第 2 页）
[在星图里打开](../#n=def.vector-field)　·　第 1 页 [nodes/def.vector-field.md](./def.vector-field.md)

## 陈述（续）
$$X\big|_{U} = \sum_{i=1}^{n} X^{i}\,\frac{\partial}{\partial x^{i}},\qquad X^{i} := \mathrm{d}x^{i}(X) ,$$

则 $X$ 光滑，当且仅当存在一个图册的每张卡上每个 $X^{i}$ 都光滑（只查一个图册就够）。

$X$ **作用在函数上**给出新函数

$$(Xf)(p) := \mathrm{d}f_{p}\bigl(X_{p}\bigr) = \sum_{i} X^{i}(p)\,\frac{\partial f}{\partial x^{i}}(p),$$
于是 $X$ 是 $C^{\infty}(M)$ 上的**导子**：$X(fg) = f\,Xg + g\,Xf$。反过来每个导子都来自唯一的向量场。

$X$ 在 $p$ 处**为零**指 $X_{p} = 0_{p}$；$X$ 的**支集**是 $\overline{\{p \in M : X_{p} \ne 0\}}$。

> 续见 [nodes/def.vector-field.3.md](./def.vector-field.3.md)
