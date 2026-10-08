# 弱 Hausdorff 的基本性质　`prop.weak-hausdorff-basic`　·　说明
根 `../`

**为什么叫「弱」Hausdorff。** Hausdorff 要求任意两点的开邻域能分开；弱 Hausdorff 只要求「紧块的像是闭的」—— 条件弱得多，却正好够用：出现在 $\mathrm{CGWH}$ 里的那些构造（商、函数空间、纤维积）都不需要全 Hausdorff。

⚠️ 弱 Hausdorff **不蕴含** Hausdorff（存在紧生成的弱 Hausdorff 而非 Hausdorff 的空间）；但它蕴含 $T_{1}$，上面第二条就是。

**对角那条的作用**：$\Delta_{X}$ $k$-闭 $\iff$ 「两个映射相等的点集」是 $k$-闭的 —— 这与 $T_{1}$、$T_{2}$ 在一般拓扑里的刻画（对角闭）平行，只是这里闭的判据换成了 $k$-闭。紧生成是让这个等价反过来的补充条件。
