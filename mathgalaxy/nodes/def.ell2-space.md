# ℓ²(I)　`def.ell2-space`
$\ell^2(I)$：任意指标集上的平方可和族
layer 14 · 定义 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=def.ell2-space)　·　[节点索引](../index.md)

对任意指标集 $I$，令

$$\ell^2(I) := \left\{ x = (x_i)_{i \in I} \subseteq \mathbb{K} \ : \ \|x\|_2 := \sup_{\substack{J \subseteq I \\ |J| < \infty}} \Bigl( \sum_{j \in J} |x_j|^2 \Bigr)^{1/2} < \infty \right\} ,$$

内积 $\langle x, y\rangle := \sum_{i \in I} x_i \overline{y_i}$。

## 为什么成立（入边，证明在 proofs/）
- [`def.inner-product`](../nodes/def.inner-product.md) 内积：用到了定义 内积　[proofs/def-link.fa-inner-ell2.md](../proofs/def-link.fa-inner-ell2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.ell2-space.2.md](./def.ell2-space.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/def.ell2-space.md`

引用：`def.ell2-space`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
