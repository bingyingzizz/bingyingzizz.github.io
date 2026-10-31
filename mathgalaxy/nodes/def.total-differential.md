# 可微与全微分　`def.total-differential`
可微与全微分
layer 18 · 定义 · 多元微分 · 数学分析
[在星图里打开](../#n=def.total-differential)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f : U \to \mathbb{R}^{m}$，$a \in U$。称 $f$ 在 $a$ **可微**，当且仅当存在**线性映射** $L : \mathbb{R}^{n} \to \mathbb{R}^{m}$ 使

$$f(a + h) = f(a) + L(h) + o(\|h\|) \qquad (\|h\| \to 0)$$
> 陈述续见 [nodes/def.total-differential.2.md](./def.total-differential.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.jacobian`](../nodes/def.jacobian.md) Jacobi 矩阵 用

- …另有出边，续页见 [nodes/def.total-differential.4.md](./def.total-differential.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.total-differential.3.md](./def.total-differential.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Spivak, Calculus on Manifolds, Ch. 2；Lang, Undergraduate Analysis, Ch. XVI

> 说明见 `notes/def.total-differential.md`

引用：`def.total-differential`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
