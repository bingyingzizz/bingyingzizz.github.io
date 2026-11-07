# 平均算子联合连续　`lem.average-continuous`　·　说明
根 `../`

$$|\chi_{B(x,r)}(y) - \chi_{B(x_0,r_0)}(y)|\,|f(y)| \le \chi_{B(x_0, r_0+1)}(y)\,|f(y)| \in L^1.$$

**第三步：逐点收敛 a.e.。** 球面 $\partial B(x_0, r_0)$ 是零测集。设 $y \notin \partial B(x_0, r_0)$。

- 若 $|y - x_0| < r_0$：取 $\varepsilon = r_0 - |y - x_0| > 0$；当 $|x - x_0| < \varepsilon/2$、$|r - r_0| < \varepsilon/2$ 时 $|y - x| \le |y - x_0| + |x - x_0| < r_0 - \varepsilon/2 < r$，故 $\chi_{B(x,r)}(y) = 1 = \chi_{B(x_0,r_0)}(y)$。

- 若 $|y - x_0| > r_0$：取 $\varepsilon = |y - x_0| - r_0 > 0$；同样的小扰动下 $|y - x| > r_0 + \varepsilon/2 > r$，故 $\chi_{B(x,r)}(y) = 0 = \chi_{B(x_0,r_0)}(y)$。

所以 $\chi_{B(x_k,r_k)} \to \chi_{B(x_0,r_0)}$ 关于 $y$ 几乎处处成立。

> 续见 notes/lem.average-continuous.3.md
