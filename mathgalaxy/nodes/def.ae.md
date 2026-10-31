# 几乎处处　`def.ae`
几乎处处
layer 16 · 定义 · 测度的构造 · 实变函数+数学分析
[在星图里打开](../#n=def.ae)　·　[节点索引](../index.md)

设 $(X, \mathcal{M}, \mu)$ 是测度空间。称一个关于点 $x$ 的命题 $P(x)$ **几乎处处成立**（记 a.e.），当且仅当

$$\exists E \in \mathcal{M}:\ \mu(E) = 0 \quad \text{且} \quad \forall x \in X \setminus E,\ P(x)\ \text{成立}$$

即：**使命题不成立的那些点构成一个零集**。

常见的用法：$f = g$ a.e.（$\{f \ne g\}$ 是零集）、$f_n \to f$ a.e.（不收敛的点是零集）、$F' = 0$ a.e.。

## 为什么成立（入边，证明在 proofs/）
- [`def.null-set`](../nodes/def.null-set.md) 零集与完备：用到了定义 零集与完备　[proofs/dep.nullset-ae.md](../proofs/dep.nullset-ae.md)

- …另有入边，续页见 [nodes/def.ae.2.md](./def.ae.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.ae.3.md](./def.ae.3.md)

refs: Rudin, Real and Complex Analysis, Ch. 1

> 说明见 `notes/def.ae.md`

引用：`def.ae`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
