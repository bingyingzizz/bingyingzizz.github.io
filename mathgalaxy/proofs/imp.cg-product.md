# imp.cg-product
`imp.cg-product` · 推出 · strong 边 · 根 `../`

`def.hausdorff` Hausdorff 空间 + `def.compactly-generated` 紧生成空间 → `cor.cg-product` 紧生成空间对积封闭

**证明。** 用的都是已经有的零件。
- $X$ 紧生成 $\iff$ $X$ 是它自己那些紧 Hausdorff 块的余极限：$X = \varinjlim_{i} S_{i}$（上一条），$S_{i}$ 紧 Hausdorff；
- $Y$ 局部紧 Hausdorff $\implies$ 函子 $-\times Y$ **保余极限**（它有右伴随 $C(Y, -)$）；于是
$$X \times Y = \Bigl(\varinjlim_{i} S_{i}\Bigr) \times Y = \varinjlim_{i}\bigl(S_{i} \times Y\bigr);$$
- **每一项 $S_{i} \times Y$ 紧生成**：它是局部紧 Hausdorff 空间（紧 $\times$ 局部紧 $=$ 局部紧 Hausdorff），而局部紧 Hausdorff $\implies$ 紧生成（每个点有紧邻域）✓；
- **紧生成空间在 $\mathbf{Top}$ 里的余极限仍紧生成**：含入 $k\mathbf{Top} \hookrightarrow \mathbf{Top}$ 是左伴随（它**有**右伴随 $k$），左伴随保余极限，故 $k\mathbf{Top}$ 里的余极限就是 $\mathbf{Top}$ 里的余极限，且结果紧生

> 续见 proofs/imp.cg-product.2.md
