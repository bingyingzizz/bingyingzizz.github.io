# Egorov 定理　`thm.egorov`
Egorov 定理：a.e. 收敛 $\implies$ 近一致
layer 21 · 定理 · 可测函数与收敛 · 实变函数+数学分析
[在星图里打开](../#n=thm.egorov)　·　[节点索引](../index.md)

设 $\mu(X) < \infty$，且 $f_n \to f$ a.e.。则 $f_n \to f$ **近一致**：

$$\forall\varepsilon > 0, \exists E \subseteq X : \mu(E) < \varepsilon,\text{ 且} f_n \rightrightarrows  f\text{ 在} X \setminus E\text{ 上一致}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.convergence-modes`](../nodes/def.convergence-modes.md) 五种收敛：a.e. 收敛 + 有限测度 $\implies$ 近一致　[proofs/imp.egorov.md](../proofs/imp.egorov.md)

- …另有入边，续页见 [nodes/thm.egorov.2.md](./thm.egorov.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`cor.lusin`](../nodes/cor.lusin.md) Lusin 定理

refs: Folland, Real Analysis, Theorem 2.33

> 说明见 `notes/thm.egorov.md`

引用：`thm.egorov`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
