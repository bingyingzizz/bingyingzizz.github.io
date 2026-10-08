# 平均算子联合连续　`lem.average-continuous`　·　说明
根 `../`

证明的骨架：把积分写成



$$\int_{B(r, x)} f(y) dy = \int_{\mathbb{R}^n} \chi_{B(r, x)}(y) f(y) dy$$



于是只需证 $\chi_{B(r,x)} \to \chi_{B(r_0,x_0)}$（当 $(r,x) \to (r_0,x_0)$）在足够好的意义上成立，再用 DCT。

分两块看（取目标点 $(r_0, x_0)$）：



$\cdot$ 若 $y$ 在球内：$\varepsilon := r_0 - |y - x_0| > 0$；当 $|x - x_0| < \varepsilon/2$ 且 $|r - r_0| < \varepsilon/2$ 时 $|y - x| < r$，故 $\chi = 1$；

$\cdot$ 若 $y$ 在球外：$\varepsilon := |y - x_0| - r_0 > 0$；同样的小扰动下 $|y - x| > r$，故 $\chi = 0$。



两边合起来说明：对**几乎处处的** $y$（只排除球面），特征函数最终稳定 —— 即逐点收敛 a.e.。

控制函数取 $\chi_{B(r_0+1, x_0)}(y)\cdot|f(y)| \in L^1$，由 **DCT** 得连续性。∎
