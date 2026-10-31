# 可积 / L¹　`def.integrable`
可积函数与 $L^{1}$ 空间
layer 19 · 定义 · 积分 · 实变函数+数学分析
[在星图里打开](../#n=def.integrable)　·　[节点索引](../index.md)

实值可测 $f$ **可积**，当且仅当 $\int f^+ < \infty$ 且 $\int f^- < \infty$。等价地：

$$f\text{ 可积} \iff \int |f| d\mu < \infty$$

复值可测 $f$ 可积，当且仅当 $\int |f| d\mu < \infty$。可积函数全体记作

$$L^1(\mu) = L^1(X, \mathcal{M}, \mu) = L^1(X, \mu)$$

## 为什么成立（入边，证明在 proofs/）
- [`def.lplus`](../nodes/def.lplus.md) 非负可测函数类：用到了定义 非负可测函数类　[proofs/def-link.lplus-integrable.md](../proofs/def-link.lplus-integrable.md)

- …另有入边，续页见 [nodes/def.integrable.2.md](./def.integrable.2.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.dct`](../nodes/thm.dct.md) 控制收敛定理 用

- …另有出边，续页见 [nodes/def.integrable.3.md](./def.integrable.3.md)

refs: Folland, Real Analysis, §2.3

> 说明见 `notes/def.integrable.md`

引用：`def.integrable`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
