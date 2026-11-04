# 实向量空间 $\to$ 离散全零 $\implies$ 对偶的导出 Hom 变成导出张量
`imp.banach-discrete-dual-tensor` · 推出 · strong 边 · 根 `../`

`prop.rhom-banach-discrete-zero` 有限维 Banach 到离散群全零 → `prop.rhom-dual-tensor` 离散对偶的导出 Hom 与导出张量

取短正合列 $0 \to \mathbb{Z} \to \mathbb{R} \to T \to 0$（$T = \mathbb{R}/\mathbb{Z}$），对靶取 $\operatorname{RHom}_{\mathbb{Z}}(M, -)$：

由 $\operatorname{RHom}_{\mathbb{Z}}(\mathbb{R}, N) = 0$（实向量空间到离散群全零，即本包引用的那条结论）得

$$\operatorname{RHom}_{\mathbb{Z}}(T,\ N) \;\cong\; \operatorname{RHom}_{\mathbb{Z}}(\mathbb{Z}[1],\ N) \;=\; N[-1].$$

把这条代进 $\operatorname{RHom}(\operatorname{RHom}(M,T),\ N)$ 并逐层展开（$M$ 离散时 $\operatorname{RHom}(M,-)$ 与导出张量互为伴随），就得到 $\operatorname{RHom}(\operatorname{RHom}(M,T),N) \cong M \otimes^{\mathbf{L}}_{\mathbb{Z}} N[-1]$。

⭐ 这一步是那个「$T$ 在导出层面等价于降一次数」的来源。
