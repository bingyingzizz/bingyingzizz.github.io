# 结构方程 $+$ Gauss–Codazzi $\implies$ 曲面论基本定理
`imp.dg-fundamental` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 + `thm.codazzi-mainardi` Codazzi–Mainardi 方程 → `thm.fundamental-theorem-surfaces` 曲面论基本定理

⚠️ **同名不同物**：这里的 $\Omega^{1}_{\ 2}$ 是**环境**曲率形式（恒为零）；「Gauss 曲率」那条定义里的 $\mathrm{d}\omega^{1}_{\ 2} = K\omega^{1}\wedge\omega^{2}$ 是它的**内蕴**部分。把两者当同一个符号写成「$\Omega^{1}_{\ 2} = \omega^{1}_{\ 3}\wedge\omega^{2}_{\ 3}$」就自相矛盾了。
3. 于是线性方程组 $\mathrm{d}e_{i} = \sum_{j}\omega^{j}_{\ i}e_{j}$ 满足 Frobenius 可积性条件：先得到**每点附近**的解；再由局部唯一性把它沿道路延拓，$U$ 单连通保证延拓结果与道路无关（否则绕一圈回来会出现和乐），于是拼成开域 $U$ 上的整体解。

> 续见 proofs/imp.dg-fundamental.7.md
