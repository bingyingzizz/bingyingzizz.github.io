# 弱 Hausdorff 的基本性质　`prop.weak-hausdorff-basic`　·　说明
根 `../`

**证明。** 五条都只用定义。
- **紧 Hausdorff 子空间闭**：$K \subseteq X$ 紧 Hausdorff，含入 $K \hookrightarrow X$ 就是定义里的那个 $f$，故 $K = f(K)$ 闭。
- **$T_{1}$**：单点 $\{x\}$ 是紧 Hausdorff 空间（它自己的）的像，故闭 —— 单点闭就是 $T_{1}$。
- **$f(S)$ 紧 Hausdorff**：$f(S)$ 紧（连续像），且由定义它在 $X$ 中闭；闭子空间的子空间拓扑是 Hausdorff 的，故 $f(S)$ 紧 Hausdorff。
- **$\Delta_{X}$ 是 $k$-闭的**：取紧 Hausdorff 的 $g = (g_{1}, g_{2}) : T \to X\times X$。$g_{1}(T)$、$g_{2}(T)$ 由上一款是紧 Hausdorff，故 $g_{1}(T)\times g_{2}(T)$ 紧 Hausdorff，于是 $\Delta_{X} \cap \bigl(g_{1}(T)\times g_{2}(T)\bigr) = \Delta_{g_{1}(T)}$（两个紧 Hausdorff 集的「相等点」）在其中**闭**；而 $g^{-1}(\Delta_{X}) = g^{-1}\bigl(\Delta_{X}\cap(g_{1}(T)\times g_{2}(T))\bigr)$ 是闭集的逆像，闭 ✓。
- **反过来（$X$ 紧生成 + $\Delta$ $k$-闭 $\implies$ 弱 Hausdorff）**：取 $f : S\to X$（$S$ 紧 Hausdorff），要证 $f(S)$ 闭。$X$ 紧生

> 续见 notes/prop.weak-hausdorff-basic.3.md
