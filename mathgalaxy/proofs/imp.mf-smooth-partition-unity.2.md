# 鼓包函数 $+$ 局部有限加细 $\implies$ 光滑单位分解
`imp.mf-smooth-partition-unity` · 推出 · strong 边 · 根 `../`

`prop.paracompact-partition-unity` 仿紧性与单位分解 + `def.partition-of-unity` 单位分解 → `thm.smooth-partition-unity` 光滑单位分解

**第二步：局部有限加细。** 流形的第二可数性 + Hausdorff + 局部欧氏给出仿紧；连续版的命题（`prop.paracompact-partition-unity`）给一个局部有限的开加细 $\{V_{\alpha}\}$，每块可设 $\overline{V_{\alpha}}$ 紧且落在某张卡 $U_{\alpha}$ 里（先取卡内的球、再由局部有限性收紧）。

**第三步：在每块上放鼓包。** 取 $p_{\alpha} \in V_{\alpha}$ 与 $\varepsilon_{\alpha} > 0$ 使 $V_{\alpha}$ 在卡像里含半径 $2\varepsilon_{\alpha}$ 的球、且球的闭包落在 $\varphi_{\alpha}(U_{\alpha})$ 内。令 $\psi_{\alpha} := \beta\bigl((\cdot - \varphi_{\alpha}(p_{\alpha}))/\varepsilon_{\alpha}\bigr) \circ \varphi_{\alpha}$，则

> 续见 proofs/imp.mf-smooth-partition-unity.3.md
