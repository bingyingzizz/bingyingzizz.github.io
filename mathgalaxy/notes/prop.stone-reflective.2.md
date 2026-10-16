# Stone 空间是 CHaus 的反射子范畴　`prop.stone-reflective`　·　说明
根 `../`

**证明。** Stone 空间 = 紧 Hausdorff **且**全不连通。把两个反射叠起来：
- 含入 $\mathbf{CHaus}\hookrightarrow\mathbf{Top}$ 有**左**伴随 $\beta$（Stone–Čech 紧化），即 $\mathbf{CHaus}$ 是反射子范畴；
- 在 $\mathbf{CHaus}$ 内部再取全不连通的那些：含入 $\mathbf{Stone}\hookrightarrow\mathbf{CHaus}$ 有左伴随「取紧 Hausdorff 空间的连通分量商」$S\mapsto S/\!\sim$（把每个连通分量压成一点），因为连续映射把紧 Hausdorff 的连通分量送到连通集、而全不连通空间里连通集只有单点；
- 于是 $\mathbf{Stone}\hookrightarrow\mathbf{CHaus}$ 是反射子范畴，反射是「取连通分量商」（它对紧 Hausdorff 空间仍是紧 Hausdorff ✓）。∎
⭐ 反射子范畴的**含入保极限**，所以 Stone 空间的极限（在 $\mathbf{CHaus}$ 或 $\mathbf{Top}$ 里算）仍是 Stone ✓ —— 这正是「Stone 空间对极限封闭」。
