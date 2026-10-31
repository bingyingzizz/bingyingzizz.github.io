# 弱 Hausdorff 推出 拟分离　`lem.weak-hausdorff-qseparated`　·　说明
根 `../`

**证明。** 不妨设 $X$ 紧生成（弱 Hausdorff 的 $k$-化不改变结论）。对 $i = 1, 2$，由拟紧性取紧 Hausdorff 空间 $S_{i}$ 与满态射 $S_{i} \twoheadrightarrow X_{i}$（「拟紧 $\iff$ 有从自由紧 Hausdorff 的满射」）。于是有满态射
$$S_{1} \times_{X} S_{2} \twoheadrightarrow X_{1} \times_{X} X_{2},$$
（纤维积保满射）。而 $X$ 弱 Hausdorff、$S_{1}, S_{2}$ 紧 Hausdorff，于是 $S_{1} \times_{X} S_{2}$ 是 $S_{1} \times S_{2}$ 里的**闭**子集（弱 Hausdorff 的定义：紧 Hausdorff 子空间沿连续映射的纤维积仍紧 Hausdorff），故紧 Hausdorff。
紧 Hausdorff 空间的商还是紧 Hausdorff（连续满像是紧的，Hausdorff 商还是 Hausdorff），故 $X_{1} \times_{X} X_{2}$ 紧 Hausdorff。∎
