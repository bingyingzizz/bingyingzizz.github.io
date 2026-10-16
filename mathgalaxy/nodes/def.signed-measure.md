# 符号测度　`def.signed-measure`
符号测度（Signed Measure）
layer 15 · 定义 · 符号测度与分解 · 分析学
[在星图里打开](../#n=def.signed-measure)　·　[节点索引](../index.md)

设 $(X, \mathcal{M})$ 是可测空间。$\nu : \mathcal{M} \to [-\infty, +\infty]$ 是**符号测度**，当且仅当

- $\nu(\emptyset) = 0$；
- $\nu$ **至多取到 $\pm \infty$ 中的一个**（不能同时取到 $\infty$ 与 $-\infty$）；
- 对两两不交的 $\{E_j\} \subseteq \mathcal{M}$：

$$\nu( \bigsqcup_j E_j ) = \sum_j \nu(E_j),\text{ 且右边的级数绝对收敛}(\text{当} |\nu(\bigsqcup E_j)| < \infty\text{ 时})$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.signed-measure.2.md](./def.signed-measure.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.signed-measure.3.md](./def.signed-measure.3.md)

refs: Folland, Real Analysis, §3.1；Halmos, Measure Theory, §28

> 说明见 `notes/def.signed-measure.md`

引用：`def.signed-measure`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
