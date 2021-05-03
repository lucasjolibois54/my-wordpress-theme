webpackHotUpdate("archive",{

/***/ "./packages/twentytwenty-theme/src/components/archive/archive.js":
/*!***********************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/archive/archive.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _post_post_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post/post-item */ \"./packages/twentytwenty-theme/src/components/post/post-item.js\");\n/* harmony import */ var _archive_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archive-header */ \"./packages/twentytwenty-theme/src/components/archive/archive-header.js\");\n/* harmony import */ var _archive_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./archive-pagination */ \"./packages/twentytwenty-theme/src/components/archive/archive-pagination.js\");\n/* harmony import */ var _post_post_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post/post-separator */ \"./packages/twentytwenty-theme/src/components/post/post-separator.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post */ \"./packages/twentytwenty-theme/src/components/post/index.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Archive=({state,showExcerpt,showMedia})=>{// Get the data of the current list.\nconst data=state.source.get(state.router.link);const{primary}=state.theme.colors;// Whether the show the excerpt instead of the full content\n// If passed as prop, we'll respect that. Else, we'll use the theme settings\nconst _showExcerpt=showExcerpt||!state.theme.showAllContentOnArchive;Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{_post__WEBPACK_IMPORTED_MODULE_6__[\"default\"].preload();},[]);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[data.isTaxonomy&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_archive_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{labelColor:primary,label:data.taxonomy,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"span\",{children:Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(state.source[data.taxonomy][data.id].name)})}),data.isAuthor&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_archive_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{labelColor:primary,label:\"Author\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"b\",{children:Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(state.source.author[data.id].name)})}),data.items.map(({type,id},index)=>{const isLastArticle=index===data.items.length-1;const item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_post_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{item:item,showExcerpt:_showExcerpt,showMedia:showMedia},item.id),!isLastArticle&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_post_separator__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{})]},item.id);}),data.totalPages>1&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_post_separator__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_archive_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{size:\"thin\"})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Archive));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlLmpzP2UyMDgiXSwibmFtZXMiOlsiQXJjaGl2ZSIsInN0YXRlIiwic2hvd0V4Y2VycHQiLCJzaG93TWVkaWEiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInByaW1hcnkiLCJ0aGVtZSIsImNvbG9ycyIsIl9zaG93RXhjZXJwdCIsInNob3dBbGxDb250ZW50T25BcmNoaXZlIiwidXNlRWZmZWN0IiwiUG9zdCIsInByZWxvYWQiLCJpc1RheG9ub215IiwidGF4b25vbXkiLCJkZWNvZGUiLCJpZCIsIm5hbWUiLCJpc0F1dGhvciIsImF1dGhvciIsIml0ZW1zIiwibWFwIiwidHlwZSIsImluZGV4IiwiaXNMYXN0QXJ0aWNsZSIsImxlbmd0aCIsIml0ZW0iLCJ0b3RhbFBhZ2VzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLEtBQU1BLFFBQU8sQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsV0FBVCxDQUFzQkMsU0FBdEIsQ0FBRCxHQUF1QyxDQUNyRDtBQUNBLEtBQU1DLEtBQUksQ0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTSxDQUFFQyxPQUFGLEVBQWNSLEtBQUssQ0FBQ1MsS0FBTixDQUFZQyxNQUFoQyxDQUVBO0FBQ0E7QUFDQSxLQUFNQyxhQUFZLENBQUdWLFdBQVcsRUFBSSxDQUFDRCxLQUFLLENBQUNTLEtBQU4sQ0FBWUcsdUJBQWpELENBRUFDLHVEQUFTLENBQUMsSUFBTSxDQUNkQyw2Q0FBSSxDQUFDQyxPQUFMLEdBQ0QsQ0FGUSxDQUVOLEVBRk0sQ0FBVCxDQUlBLE1BQ0Usd0pBRUdaLElBQUksQ0FBQ2EsVUFBTCxFQUNDLHVFQUFDLHVEQUFELEVBQWUsVUFBVSxDQUFFUixPQUEzQixDQUFvQyxLQUFLLENBQUVMLElBQUksQ0FBQ2MsUUFBaEQsVUFDRSx3RkFBT0MsdURBQU0sQ0FBQ2xCLEtBQUssQ0FBQ0ksTUFBTixDQUFhRCxJQUFJLENBQUNjLFFBQWxCLEVBQTRCZCxJQUFJLENBQUNnQixFQUFqQyxFQUFxQ0MsSUFBdEMsQ0FBYixFQURGLEVBSEosQ0FTR2pCLElBQUksQ0FBQ2tCLFFBQUwsRUFDQyx1RUFBQyx1REFBRCxFQUFlLFVBQVUsQ0FBRWIsT0FBM0IsQ0FBb0MsS0FBSyxDQUFDLFFBQTFDLFVBQ0UscUZBQUlVLHVEQUFNLENBQUNsQixLQUFLLENBQUNJLE1BQU4sQ0FBYWtCLE1BQWIsQ0FBb0JuQixJQUFJLENBQUNnQixFQUF6QixFQUE2QkMsSUFBOUIsQ0FBVixFQURGLEVBVkosQ0FnQkdqQixJQUFJLENBQUNvQixLQUFMLENBQVdDLEdBQVgsQ0FBZSxDQUFDLENBQUVDLElBQUYsQ0FBUU4sRUFBUixDQUFELENBQWVPLEtBQWYsR0FBeUIsQ0FDdkMsS0FBTUMsY0FBYSxDQUFHRCxLQUFLLEdBQUt2QixJQUFJLENBQUNvQixLQUFMLENBQVdLLE1BQVgsQ0FBb0IsQ0FBcEQsQ0FDQSxLQUFNQyxLQUFJLENBQUc3QixLQUFLLENBQUNJLE1BQU4sQ0FBYXFCLElBQWIsRUFBbUJOLEVBQW5CLENBQWIsQ0FDQTtBQUNBLE1BQ0UseUVBQUMsOENBQUQsWUFDRSx1RUFBQyx1REFBRCxFQUVFLElBQUksQ0FBRVUsSUFGUixDQUdFLFdBQVcsQ0FBRWxCLFlBSGYsQ0FJRSxTQUFTLENBQUVULFNBSmIsRUFDTzJCLElBQUksQ0FBQ1YsRUFEWixDQURGLENBT0csQ0FBQ1EsYUFBRCxFQUFrQix1RUFBQyw0REFBRCxJQVByQixHQUFlRSxJQUFJLENBQUNWLEVBQXBCLENBREYsQ0FXRCxDQWZBLENBaEJILENBaUNHaEIsSUFBSSxDQUFDMkIsVUFBTCxDQUFrQixDQUFsQixFQUNDLHVKQUNFLHVFQUFDLDREQUFELElBREYsQ0FFRSx1RUFBQywyREFBRCxFQUFZLElBQUksQ0FBQyxNQUFqQixFQUZGLEdBbENKLEdBREYsQ0EwQ0QsQ0F2REQsQ0F5RGVDLHVIQUFPLENBQUNoQyxPQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL3Bvc3QvcG9zdC1pdGVtXCI7XG5pbXBvcnQgQXJjaGl2ZUhlYWRlciBmcm9tIFwiLi9hcmNoaXZlLWhlYWRlclwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vYXJjaGl2ZS1wYWdpbmF0aW9uXCI7XG5pbXBvcnQgUG9zdFNlcGFyYXRvciBmcm9tIFwiLi4vcG9zdC9wb3N0LXNlcGFyYXRvclwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uL3Bvc3RcIjtcblxuY29uc3QgQXJjaGl2ZSA9ICh7IHN0YXRlLCBzaG93RXhjZXJwdCwgc2hvd01lZGlhIH0pID0+IHtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc3QgeyBwcmltYXJ5IH0gPSBzdGF0ZS50aGVtZS5jb2xvcnM7XG5cbiAgLy8gV2hldGhlciB0aGUgc2hvdyB0aGUgZXhjZXJwdCBpbnN0ZWFkIG9mIHRoZSBmdWxsIGNvbnRlbnRcbiAgLy8gSWYgcGFzc2VkIGFzIHByb3AsIHdlJ2xsIHJlc3BlY3QgdGhhdC4gRWxzZSwgd2UnbGwgdXNlIHRoZSB0aGVtZSBzZXR0aW5nc1xuICBjb25zdCBfc2hvd0V4Y2VycHQgPSBzaG93RXhjZXJwdCB8fCAhc3RhdGUudGhlbWUuc2hvd0FsbENvbnRlbnRPbkFyY2hpdmU7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQb3N0LnByZWxvYWQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgPEFyY2hpdmVIZWFkZXIgbGFiZWxDb2xvcj17cHJpbWFyeX0gbGFiZWw9e2RhdGEudGF4b25vbXl9PlxuICAgICAgICAgIDxzcGFuPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvc3Bhbj5cbiAgICAgICAgPC9BcmNoaXZlSGVhZGVyPlxuICAgICAgKX1cblxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuICAgICAgICA8QXJjaGl2ZUhlYWRlciBsYWJlbENvbG9yPXtwcmltYXJ5fSBsYWJlbD1cIkF1dGhvclwiPlxuICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgIDwvQXJjaGl2ZUhlYWRlcj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc0xhc3RBcnRpY2xlID0gaW5kZXggPT09IGRhdGEuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPEFydGljbGVcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICBzaG93RXhjZXJwdD17X3Nob3dFeGNlcnB0fVxuICAgICAgICAgICAgICBzaG93TWVkaWE9e3Nob3dNZWRpYX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWlzTGFzdEFydGljbGUgJiYgPFBvc3RTZXBhcmF0b3IgLz59XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgICB7ZGF0YS50b3RhbFBhZ2VzID4gMSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFBvc3RTZXBhcmF0b3IgLz5cbiAgICAgICAgICA8UGFnaW5hdGlvbiBzaXplPVwidGhpblwiIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQXJjaGl2ZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/archive/archive.js\n");

/***/ }),

/***/ "./packages/twentytwenty-theme/src/components/post/featured-media.js":
false,

/***/ "./packages/twentytwenty-theme/src/components/post/post-categories.js":
false,

/***/ "./packages/twentytwenty-theme/src/components/post/post-item.js":
false,

/***/ "./packages/twentytwenty-theme/src/components/post/post-meta-item.js":
false,

/***/ "./packages/twentytwenty-theme/src/components/post/post-meta.js":
false,

/***/ "./packages/twentytwenty-theme/src/components/post/post-tags.js":
false

})