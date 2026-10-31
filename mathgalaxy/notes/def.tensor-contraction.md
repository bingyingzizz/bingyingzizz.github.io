# 缩并　`def.tensor-contraction`　·　说明
根 `../`

**为什么必须一上一下**：缩并的实质是用配对 $\mathrm{d}x^{a}(\partial_{b}) = \delta^{a}_{\ b}$ 吃掉一对指标，而这样的配对只存在于「一个余向量槽、一个向量槽」之间。两个上标想配对，得先借度量把其中一个拉下来（$T^{ab} \mapsto g_{ac}T^{cb}$ 再缩并，得 $T^{a}_{\ a}$）—— 那是**用了额外结构**的运算，不是张量代数自带的。

**$(1,1)$ 型时就是取迹**：$\mathrm{C}^{1}_{\ 1}T = \operatorname{tr}T$（把 $T$ 看成逐点的线性变换 $T_{p}M \to T_{p}M$）。所以缩并是取迹的推广，`def.trace` 里那条「$\operatorname{tr}(AB) = \operatorname{tr}(BA)$」在这里读作「缩并的次序可以调换」。

**例子**：曲率张量是 $(1,3)$ 型的，缩并一次（上标与第二个下标）得 Ricci 张量（`def.ricci-curvature`），再缩并一次得标量曲率。Einstein 张量是 Ricci 张量与 $g$ 的组合 —— 所以「曲率的三个层次」就是「缩并 $0/1/2$ 次」。

> 续见 notes/def.tensor-contraction.2.md
