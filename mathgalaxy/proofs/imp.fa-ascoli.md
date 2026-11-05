# 一致等度连续 + 逐点全有界 $\implies$ 全有界
`imp.fa-ascoli` · 推出 · strong 边 · 根 `../`

`thm.equicontinuous-uniform` 等度连续与一致等度连续 + `thm.arzela-ascoli` Arzelà–Ascoli 定理 → `thm.arzela-ascoli-general` 广义 Arzelà–Ascoli

等度连续在紧度量上自动升为一致等度连续。给 $\varepsilon$，取 $\eta > 0$ 使 $\delta(x,y) < \eta \implies d(f(x), f(y)) < \varepsilon/3$（一切 $f$）。
⛔ **本条为骨架（待重写）**：端点 `thm.arzela-ascoli-general` 只假设 $K$ **紧**（未必可度量），而下面用了距离与有限 $\eta$-网 —— 那只在紧**度量**空间里有效；一般紧空间要把「$\eta$-网」换成等度连续性给出的**有限开邻域覆盖**，并且延拓要按单位分解拼接（原来的「最近网点常值延拓」还不能保证连续）。本图未展开。

> 续见 proofs/imp.fa-ascoli.2.md
