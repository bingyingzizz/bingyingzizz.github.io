# 弱 Hausdorff 推出 拟分离　`lem.weak-hausdorff-qseparated`　·　说明
根 `../`

**直觉**：拟分离要的是「两个紧块的交还是紧块」。弱 Hausdorff 正好保证了这件事 —— 它说紧块的像都是闭的，于是两个紧块沿 $X$ 的拉回落在紧块里。

⚠️ 这里 $X_{1} \times_{X} X_{2}$ 的紧性是 $\mathrm{CGWH}$ 系里那条「紧 Hausdorff 沿弱 Hausdorff 的纤维积」的直接应用。

**证明。** 不妨设 $X$ 紧生成（弱 Hausdorff 的 $k$-化不改变结论）。对 $i = 1, 2$，由拟紧性取紧 Hausdorff 空间 $S_{i}$ 与满态射 $S_{i} \twoheadrightarrow X_{i}$（「拟紧 $\iff$ 有从自由紧 Hausdorff 的满射」）。于是有满态射
$$S_{1} \times_{X} S_{2} \twoheadrightarrow X_{1} \times_{X} X_{2},$$
（纤维积保满射）。

> 续见 notes/lem.weak-hausdorff-qseparated.2.md
