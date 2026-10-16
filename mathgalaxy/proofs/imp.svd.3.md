# 谱定理 $\implies$ 奇异值分解
`imp.svd` · 推出 · strong 边 · 根 `../`

`thm.spectral-theorem` 谱定理（实对称） + `def.operator-adjoint` 伴随算子 → `thm.svd` 奇异值分解

$ 的标准正交基 $u_1, \ldots, u_m$；把 $v_1, \ldots, v_n$ 补全成标准正交基。则 $Av_i = \sigma_i u_i$（$i \le r$）且 $Av_i = 0$（$i > r$，因为 $\|Av_i\|^{2} = \lambda_i = 0$）。
4. 以 $v_i$ 为定义域基、$u_i$ 为值域基写出矩阵：$A$ 在这两组基下是 $\Sigma = \operatorname{diag}(\sigma_1, \ldots, \sigma_r, 0, \ldots)$，即 $A = U\Sigma V^{\mathsf{T}}$。∎

> 关键观察只有一条：**$A^{\mathsf{T}}A$ 半正定** —— 于是谱定理给出正交的特征基，而 $A$ 把这组基送到一组正交向量上（差伸缩 $\sigma_i$）。SVD 的全部内容就是这个观察的坐标化。
