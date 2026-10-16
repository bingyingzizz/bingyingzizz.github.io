# 导数与极限交换　`thm.uniform-limit-derivative`　·　说明
根 `../`

⭐ 与积分那条的关键区别：**求导会把误差放大**，所以需要一致收敛的不是 $f_n$ 而是 $f_n'$。还要额外假设「有一个点收敛」，否则 $f_n$ 可以全体差一个常数（$f_n + c_n$ 的导数收敛一样好）。

⚠ 只假设 $f_n \rightrightarrows f$ **不够**：$f_n(x) = \frac{\sin(nx)}{n}$ 一致收敛到 $0$，而 $f_n'(x) = \cos(nx)$ 处处不收敛。

⭐ 证明走中值定理：对 $\frac{f_n(x) - f_n(x_0)}{x - x_0}$ 用 Lagrange 中值定理把差商换成某点的 $f_n'$，再让 $n \to \infty$ 用 $f_n'$ 的一致收敛。
