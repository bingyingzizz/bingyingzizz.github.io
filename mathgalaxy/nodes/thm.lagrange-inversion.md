# Lagrange 反演公式　`thm.lagrange-inversion`
Lagrange 反演：由 $w = x\varphi(w)$ 反解系数
layer 18 · 定理 · 函数列、幂级数与初等函数 · 数学分析
[在星图里打开](../#n=thm.lagrange-inversion)　·　[节点索引](../index.md)

设 $\varphi(t) = \sum_{n \ge 0} \varphi_n t^n$ 是形式幂级数，$\varphi_0 \ne 0$。则方程
$$w = x\,\varphi(w)$$
有唯一形式解 $w(x) = \sum_{n \ge 1} w_n x^n$，且对每个 $n \ge 1$，
$$[x^n]\,w(x) = \frac{1}{n}\,[t^{n-1}]\,\varphi(t)^n .$$
更一般地，对任意形式幂级数 $H$，
$$[x^n]\,H(w(x)) = \frac{1}{n}
> 陈述续见 [nodes/thm.lagrange-inversion.2.md](./thm.lagrange-inversion.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.lagrange-inversion.3.md](./thm.lagrange-inversion.3.md)

refs: Stanley, Enumerative Combinatorics, Vol. 1；Wilf, generatingfunctionology

> 说明见 `notes/thm.lagrange-inversion.md`

引用：`thm.lagrange-inversion`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
