# 三角不等式 + MCT + DCT $\implies$ $L^p$ 完备
`imp.lp-banach` · 推出 · strong 边 · 根 `../`

`thm.minkowski` Minkowski 不等式 + `thm.mct` 单调收敛定理 + `thm.dct` 控制收敛定理 → `thm.lp-banach` L^p 是 Banach 空间

**③ 再做范数收敛。** 部分和 $s_n := \sum_{k \le n} f_k$ 满足 $s_n \to F$ a.e.，且

$$|F - s_n|^p \le \left( |F| + |s_n| \right)^p \le (2G)^p \in L^1$$

（因为 $|F| \le G$、$|s_n| \le G$。）由 **DCT**，

$$\left\| F - s_n \right\|_p^p = \int |F - s_n|^p \to 0$$

即 $s_n \to F$ 于 $L^p$。故绝对收敛级数都收敛，$L^p$ 完备。∎

$>$ ⭐ 这一段是「用逐点收敛的定理（MCT / DCT）去证范数收敛」的范例：控制函数 $G$ 就是关键桥梁。
