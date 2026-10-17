# 多元链式法则　`thm.chain-rule-multi`
定理：链式法则 $D(g \circ f) = Dg \cdot Df$
layer 20 · 定理 · 多元微分 · 分析学
[在星图里打开](../#n=thm.chain-rule-multi)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$、$V \subseteq \mathbb{R}^{m}$ 开，$f : U \to V$ 在 $a \in U$ 可微，$g : V \to \mathbb{R}^{p}$ 在 $b = f(a)$ 可微。则复合 $g \circ f$ 在 $a$ 可微，且

$$D(g \circ f)(a) = Dg\bigl(f(a)\bigr) \circ Df(a)$$

写成矩阵就是

$$J_{g \circ f}(a) = J_g\bigl(f(a)\bigr)\, J_f(a)$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.chain-rule-multi.2.md](./thm.chain-rule-multi.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.chain-rule-multi.3.md](./thm.chain-rule-multi.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Spivak, Calculus on Manifolds, Ch. 2

> 说明见 `notes/thm.chain-rule-multi.md`

引用：`thm.chain-rule-multi`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
