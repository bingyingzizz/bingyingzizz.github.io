# Maurer–Cartan 方程　`thm.maurer-cartan`　·　说明
根 `../`

**系数与符号的来历**：把 $[\omega\wedge\omega]$ 逐项写开时，$(j,k)$ 与 $(k,j)$ 两项给出 $c^{i}_{\ jk} - c^{i}_{\ kj} = 2c^{i}_{\ jk}$，恰好抵掉 $\frac{1}{2}$；符号来自「$\mathrm{d}\theta(X,Y) = X\theta(Y) - Y\theta(X) - \theta([X,Y])$」里的最后一项。所以这条公式没有一处自由度是多余的：有的书把括号归一化成不除 $2$，系数就跟着变（$\mathrm{d}\omega = -\frac{1}{2}[\omega,\omega]$ 与 $\mathrm{d}\omega + [\omega\wedge\omega] = 0$ 是同一句话的两种写法）。

**它就是 Cartan 结构方程的群版本**：曲面上的结构方程 $\mathrm{d}\omega^{i} = \sum_{j}\omega^{j}\wedge\omega^{i}_{\ j}$ 描述「标架怎么转」；这里标架不动、群在动，于是 $\mathrm{d}\omega^{i}$ 只剩结构常数这一项。同一套记账，一个描述空间弯曲，一个描述乘法非交换。

**反推 Jacobi**：对 MC 方程两边取 $\mathrm{d}$ 并用 $\mathrm{d}^{2} = 0$，比较 $\omega^{j}\wedge\omega^{k}\wedge\omega^{l}$ 的系数，得到

> 续见 notes/thm.maurer-cartan.2.md
