# 弱 Hausdorff 的基本性质　`prop.weak-hausdorff-basic`　·　说明
根 `../`

成，故只需证对每个紧 Hausdorff 的 $h : T \to X$，$h^{-1}\bigl(f(S)\bigr)$ 在 $T$ 中闭。而
$$h^{-1}\bigl(f(S)\bigr) = \operatorname{pr}_{T}\Bigl(\{(s, t) : f(s) = h(t)\}\Bigr) = \operatorname{pr}_{T}\Bigl((f,h)^{-1}(\Delta_{X})\Bigr),$$
其中 $(f,h)^{-1}(\Delta_{X})$ 在 $S\times T$ 中闭（$S\times T$ 紧 Hausdorff，$\Delta$ $k$-闭）；而 $\operatorname{pr}_{T} : S\times T\to T$ 是**闭映射**（$S$ 紧），故 $h^{-1}(f(S))$ 闭 ✓。
- **$\ker(f,g)$ 是 $k$-闭的**：$\ker(f,g) = (f,g)^{-1}(\Delta_{Y})$，而 $k$-闭集沿连续映射的拉回仍 $k$-闭（用紧 Hausdorff 测试：$(f,g)\circ h$ 连续，$h^{-1}(\ker) = ((f,g)\circ h)^{-1}(\Delta_{Y})$ 闭）。∎
