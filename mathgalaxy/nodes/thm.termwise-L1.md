# L¹ 的逐项积分　`thm.termwise-L1`
定理：$\sum\int|f_{j}| < \infty \implies \sum f_{j}$ 几乎处处收敛且可逐项积分
layer 20 · 定理 · 积分 · 实变函数+数学分析
[在星图里打开](../#n=thm.termwise-L1)　·　[节点索引](../index.md)

设 $\{f_j\} \subseteq L^1$ 满足

$$\sum_{j=1}^{\infty} \int |f_j| d\mu < \infty$$

则 $\sum_j f_j$ 几乎处处收敛到一个 $L^1$ 中的函数，并且可以逐项积分：

$$\int \sum_{j=1}^{\infty} f_j = \sum_{j=1}^{\infty} \int f_j$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.termwise-L1.2.md](./thm.termwise-L1.2.md)

refs: Folland, Real Analysis, Theorem 2.25

> 说明见 `notes/thm.termwise-L1.md`

引用：`thm.termwise-L1`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
