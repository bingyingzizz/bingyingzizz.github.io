# L^p ∩ L^r ⊆ L^q　`prop.lp-inter-lr-in-lq`
命题（插值）：$L^p \cap L^r \subseteq L^q$
layer 19 · 命题 · L^p 空间 · 分析学
[在星图里打开](../#n=prop.lp-inter-lr-in-lq)　·　[节点索引](../index.md)

设 $0 < p < q < r \le \infty$。若 $f \in L^p \cap L^r$，则 $f \in L^q$，且

$$\|f\|_q \le \|f\|_p^{\lambda} \, \|f\|_r^{1-\lambda}$$

其中 $\lambda \in (0,1)$ 由下式确定：

$$\frac{1}{q} = \frac{\lambda}{p} + \frac{1-\lambda}{r} \qquad \iff \qquad \lambda = \frac{\,q^{-1} - r^{-1}\,}{p^{-1} - r^{-1}}$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.lp-inter-lr-in-lq.2.md](./prop.lp-inter-lr-in-lq.2.md)

refs: Folland, Real Analysis, Prop. 6.4

> 说明见 `notes/prop.lp-inter-lr-in-lq.md`

引用：`prop.lp-inter-lr-in-lq`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
