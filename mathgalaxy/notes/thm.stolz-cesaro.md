# Stolz–Cesàro 定理　`thm.stolz-cesaro`　·　说明
根 `../`

⭐ **它是离散版的 L'Hôpital 法则**：把「导数之比」换成「差分之比」。$0/0$ 型要求分子也趋于 $0$；$*/\infty$ 型不要求 $x_n$ 收敛。

**例**：$x_n = 1 + \frac12 + \cdots + \frac1n$、$y_n = \log n$。则 $\Delta x_n = \frac{1}{n+1}$、$\Delta y_n = \log\frac{n+1}{n} \sim \frac1n$，差分之比 $\to 1$，故 $H_n/\log n \to 1$。

⚠ **单调性不能去掉**：取 $x_n = (-1)^n$、$y_n = (-1)^n$，差分之比恒为 $1$，但 $x_n/y_n = 1$ 平凡；再看 $x_n = (-1)^n\sqrt n$、$y_n = \sqrt n$，$x_n/y_n$ 不收敛。

⚠ 与 Cesàro 平均的关系：取 $x_n$ 为部分和、$y_n = n$，Stolz 就退化成「算术平均」那一条（见 `thm.cesaro-mean-limit`）。
