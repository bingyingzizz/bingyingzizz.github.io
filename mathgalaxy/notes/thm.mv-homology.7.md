# Mayer–Vietoris（同调）　`thm.mv-homology`　·　说明
根 `../`

**为什么这里不需要好对。** 全部论证只用了开覆盖与 Lebesgue 数，没有用 $A$ 在 $X$ 中的邻域收缩；这是奇异同调比同伦群好用的地方。

⭐ **难点的位置**：不是正合列（那是纯代数），而是「局部落在 $U$ 或 $V$」升级成「整体同调等价」——第四步的链同伦。符号全在锥构造里：$\operatorname{sd}_{p} := [b_{p}, \operatorname{sd}_{p-1}(\partial\Delta^{p})]$ 与 $t_{p} := [b_{p}, c_{p}]$。

⚠️ **与 `thm.mayer-vietoris` 的区别**：那个节点是 **de Rham 版**（光滑流形、实系数、微分形式复形，`def.de-rham-complex`）。这里是**奇异链版**（任意空间、$\mathbb{Z}$ 系数）。两个序列形状一样，但一个有挠部信息、一个没有 —— 名字相似不等于同一个结论，不要互相引用当证明。

💡 常用法：算 $\tilde{H}_{*}(S^{n})$（`thm.sphere-homology`）、把环面拆成两张柱面、把连通和拆成两块挖掉小球的空间。
