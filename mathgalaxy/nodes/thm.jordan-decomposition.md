# Jordan 分解定理　`thm.jordan-decomposition`
Jordan 分解定理
layer 19 · 定理 · 符号测度与分解 · 实变函数+数学分析
[在星图里打开](../#n=thm.jordan-decomposition)　·　[节点索引](../index.md)

设 $\nu$ 是符号测度。则存在**测度** $\mu_1, \mu_2$ 使

$$\nu = \mu_1 - \mu_2, \quad  \mu_1 \perp  \mu_2, $$

且其中**至少一个是有限的**。这样的分解是唯一的。

具体地，取 $\nu$ 的一个 Hahn 分解 $X = P \sqcup  N$，令

$$\nu^+ := \nu(\cdot \cap P), \quad  \nu^- := -\nu(\cdot \cap N)$$

则 $\nu = \nu^+ - \nu^-$ 且 $\nu^+ \perp  \nu^-$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.jordan-decomposition.2.md](./thm.jordan-decomposition.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.jordan-decomposition.3.md](./thm.jordan-decomposition.3.md)

refs: Folland, Real Analysis, Theorem 3.4

> 说明见 `notes/thm.jordan-decomposition.md`

引用：`thm.jordan-decomposition`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
