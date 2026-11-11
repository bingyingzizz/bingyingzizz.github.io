# 紧块沿闭含入拼出的空间　`prop.closed-inclusion-filtered-limit`　·　说明
根 `../`

**各方向用到的假设**（拓扑刻画是余极限定义，分离结论另需论证）：
- 拓扑空间中的余极限 $\implies$ 开集逐块检测：这是终拓扑的定义，不需要先证明紧生成或弱 Hausdorff；原注把第 3 条称为额外实质须作此区分。
- 闭含入的滤过系统 $\implies$ 各块在余极限中闭：共同后继块内两块的交闭，再用终拓扑检测；滤过性及闭含入用于这一步。
- 紧 Hausdorff 块的终拓扑 $\implies$ 紧生成：块的结构映射就是紧 Hausdorff 探测映射；弱 Hausdorff 结论不能仅由这句定义推出，任意滤过索引下的完整证明该步未核实，记为缺口。
- 紧生成弱 Hausdorff 空间 $\implies$ 紧 Hausdorff 子空间的滤过分解：弱 Hausdorff 保证紧 Hausdorff 探测映射的像闭且 Hausdorff，有限并给共同上界，紧生成保证终拓扑还原原拓扑。
- 不能删去紧生成：不可数集合的余可数拓扑是弱 Hausdorff，紧 Hausdorff 子空间均有限，其终拓扑为离散拓扑，不能还原原拓扑。
