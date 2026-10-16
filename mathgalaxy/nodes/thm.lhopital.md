# L'Hôpital 法则　`thm.lhopital`
L'Hôpital 法则（不定式极限）
layer 22 · 定理 · 微分中值定理与 Taylor · 分析学
[在星图里打开](../#n=thm.lhopital)　·　[节点索引](../index.md)

设 $f, g$ 在 $x_0$ 的某去心邻域内可导、$g' \ne 0$，且

$$\lim_{x \to x_0} f(x) = \lim_{x \to x_0} g(x) = 0$$

（或两者都趋于 $\pm\infty$）。若 $\lim_{x \to x_0} \dfrac{f'(x)}{g'(x)}$ 存在（允许 $\pm\infty$），则

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.cauchy-mvt`](../nodes/thm.cauchy-mvt.md) Cauchy 中值定理：Cauchy 中值定理 $\implies$ L'Hôpital 法则　[proofs/imp.lhopital.md](../proofs/imp.lhopital.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.lhopital.2.md](./thm.lhopital.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5

> 说明见 `notes/thm.lhopital.md`

引用：`thm.lhopital`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
