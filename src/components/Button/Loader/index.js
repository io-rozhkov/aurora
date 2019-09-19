import React from "react";
import PropTypes from "prop-types";

import { Dot, LoaderWrapper, ContentWrapper, DotsWrapper } from "./styles";
import { BUTTON_VARIANTS } from "../../constants";

const Loader = ({ children, loading, variant }) => (
  <LoaderWrapper>
    {loading && (
      <DotsWrapper data-bdd="loader">
        <Dot variant={variant} />
        <Dot variant={variant} />
        <Dot variant={variant} />
      </DotsWrapper>
    )}
    <ContentWrapper isLoading={loading}>{children}</ContentWrapper>
  </LoaderWrapper>
);

Loader.propTypes = {
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(BUTTON_VARIANTS).isRequired,
  children: PropTypes.node.isRequired
};

Loader.defaultProps = {
  loading: false
};

export default Loader;
