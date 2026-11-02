# Stone 空间是紧 Hausdorff 空间的反射子范畴　`prop.stone-reflective`　·　说明
根 `../`

推论：**Stone 空间的任意极限仍是 Stone 空间**。把这条与「全不连通空间对极限封闭」并排看，就能读出 Stone 空间的双重身份：它既是「紧 Hausdorff 里全不连通的那些」，也是「紧 Hausdorff 这个反射子范畴里再反射一次剩下的那些」。

**证明。** Stone 空间 = 紧 Hausdorff **且**全不连通。把两个反射叠起来：
- 含入 $\mathbf{CHaus}\hookrightarrow\mathbf{Top}$ 有**左**伴随 $\beta$（Stone–Čech 紧化），即 $\mathbf{CHaus}$ 是反射子范畴；
- 在 $\mathbf{CHaus}$ 内部再取全不连通的那些：含入 $\mathbf{Stone}\hookrightarrow\mathbf{CHaus}$ 有左伴随「取紧 Hausdorff 空间的连通分量商」$S\mapsto S/\!\sim$（把每个连通分量压成一点），因为连续映射把紧 Hausdorff 的连通分量送到连通集、而全不连通空间里连通集只有单点；

> 续见 notes/prop.stone-reflective.2.md
