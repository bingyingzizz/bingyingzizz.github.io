# 离散对偶的 RHom 与导出张量　`prop.rhom-dual-tensor`　·　说明
根 `../`

**在说什么。** 把「先取对偶、再对靶算 RHom」这个往返回溯成一个**导出张量积**，并且**降了一次数**（$[-1]$）。于是「算对偶的 Ext」被换成了「算张量积」—— 后者在离散群上可以用自由消解直接做。

**证法**。用短正合列 $0 \to \mathbb{Z} \to \mathbb{R} \to T \to 0$。由前面两条归零定理得 $\operatorname{RHom}_{\mathbb{Z}}(\mathbb{R}, N) = 0$，于是 $\operatorname{RHom}_{\mathbb{Z}}(T, N) \cong N[-1]$。代入 $\operatorname{RHom}(M, T)$ 并逐层展开，再用自由情形的导出张量计算，就得到结论。

⭐ 这条把 $T$ 这个「圆」的角色讲清楚了：$T$ 在导出层面**等价于降一次数**（$\operatorname{RHom}(-, T)$ 把离散群送到它自己的 $[-1]$）。这正是下一节 Pontryagin 对偶能用 RHom 写出来的原因。
